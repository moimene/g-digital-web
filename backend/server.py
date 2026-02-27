from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse, Response
import os

app = FastAPI(title="g-digital Server")

STATIC_ROOT = "/app"

# ═══════════════════════════════════════════════════════
# PDF ONE-PAGER GENERATION
# ═══════════════════════════════════════════════════════

SECTOR_DATA = {
    "banca": {
        "title": "Trust API para Banca & Fintech",
        "subtitle": "Cumplimiento DORA, KYC certificado, Scoring IA",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Cumplimiento DORA", "El Reglamento de Resiliencia Operativa Digital exige trazabilidad certificada. Reg. (UE) 2022/2554."),
            ("Onboarding KYC", "Expedientes sin evidencia cualificada son impugnables. Riesgo SEPBLAC/AMLCFT."),
            ("Scoring IA", "Decisiones de scoring crediticio sin log sellado. No puedes explicar ni auditar bajo AI Act."),
        ],
        "soluciones": [
            ("Onboarding KYC certificado", "POST /v1/evidence", "Expediente completo con hash, selfie verificado y timestamp cualificado"),
            ("Explicabilidad scoring", "POST /v1/custody", "Input, output, modelo, razonamiento: todo sellado. Custodia del dataset"),
            ("SCA firma cualificada", "POST /v1/signatures/qualified", "Strong Customer Authentication con firma electronica cualificada PSD2"),
            ("Comunicaciones SEPBLAC", "POST /v1/notifications", "Notificaciones regulatorias certificadas con acuse sellado"),
            ("Audit trail DORA", "POST /v1/timestamps", "Cada operacion critica sellada con timestamp cualificado"),
        ],
        "regulacion": ["DORA (Reg. 2022/2554)", "NIS2 (Dir. 2022/2555)", "AI Act (Reg. 2024/1689)", "eIDAS 2.0 (Reg. 2024/1183)"],
    },
    "seguros": {
        "title": "Trust API para Seguros & Insurtech",
        "subtitle": "Cumplimiento IDD, Contratacion certificada, Siniestros",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Cumplimiento IDD", "La Directiva de Distribucion de Seguros exige transparencia y prueba de consentimiento informado."),
            ("Contratacion telefonica", "Cada contratacion sin grabacion certificada es un consentimiento verbal impugnable."),
            ("Cadena de custodia", "Fotos de siniestro sin hash ni timestamp. Informes periciales sin sellado. Cuestionable en juicio."),
        ],
        "soluciones": [
            ("Contratacion con timestamp pre-firma", "Evidence + Signature", "Timestamps previos que acreditan presentacion de condiciones y exclusiones"),
            ("Contratacion telefonica certificada", "Evidence + Custody", "Grabacion certificada con valor probatorio. Prueba de consentimiento verbal"),
            ("Fotografia siniestro sellada", "POST /v1/evidence", "Hash SHA-256 + EXIF + geolocalizacion + timestamp cualificado"),
            ("Declaracion salud firmada", "POST /v1/signatures", "Firma biometrica con timestamp. Prueba del estado declarado"),
            ("Renovaciones fehacientes", "POST /v1/notifications", "Comunicacion de renovacion con acuse de recibo certificado"),
        ],
        "regulacion": ["IDD (Dir. 2016/97)", "LSSI-CE", "eIDAS (Reg. 910/2014)", "RGPD"],
    },
    "salud": {
        "title": "Trust API para Salud & Digital Health",
        "subtitle": "Consentimiento informado, Historia clinica, Telemedicina",
        "escenarios": "25 escenarios de integracion",
        "dolor": [
            ("Consentimiento informado", "Ley 41/2002. Sin firma cualificada, cuestionable en procedimiento de responsabilidad medica."),
            ("Historia clinica", "Accesos sin certificar. Modificaciones sin timestamp. Datos Art. 9 RGPD sin cadena de custodia."),
            ("Teleconsulta sin evidencia", "Sesiones sin registro certificado. Decisiones clinicas sin timestamp. Prescripciones sin firma."),
        ],
        "soluciones": [
            ("Consentimiento informado cualificado", "POST /v1/signatures/qualified", "Firma biometrica + audit trail. Cumplimiento Ley 41/2002"),
            ("Acceso historia clinica", "POST /v1/timestamps", "Cada acceso sellado: quien, cuando, que consulto. Trazabilidad RGPD"),
            ("Teleconsulta con timestamp", "POST /v1/evidence", "Sesion sellada: inicio, fin, participantes, decisiones clinicas"),
            ("Receta electronica firmada", "POST /v1/signatures/qualified", "Firma cualificada del prescriptor. Verificacion de identidad"),
            ("Custodia datos investigacion", "POST /v1/custody", "Clinical trials: custodia certificada de datasets y protocolos"),
        ],
        "regulacion": ["Ley 41/2002", "RGPD Art. 9", "Ley 14/1986", "eIDAS"],
    },
    "logistica": {
        "title": "Trust API para Logistica & Supply Chain",
        "subtitle": "Albaranes firmados, Cadena de frio, Trazabilidad RASFF",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Albaranes repudiados", "PDF en carpeta compartida. Cliente niega recepcion. Cada albaran sin firmar es un cobro perdido."),
            ("Cadena de custodia", "Entregas sin geolocalizacion. Temperaturas sin timestamp. Trazabilidad cuestionable."),
            ("Trazabilidad RASFF", "Alertas RASFF requieren trazabilidad demostrable. Sin sellado, no puedes probar cumplimiento."),
        ],
        "soluciones": [
            ("Albaran digital firmado", "Evidence + Signature", "Firma biometrica + geolocalizacion GPS + timestamp cualificado"),
            ("Cadena de frio IoT", "POST /v1/timestamps", "Cada lectura de temperatura sellada automaticamente"),
            ("Telemetria GPS sellada", "POST /v1/evidence", "Posicion de flota certificada. Prueba de ruta y tiempos"),
            ("Trazabilidad lotes", "POST /v1/evidence", "Registro inmutable desde origen hasta destino"),
            ("Incidencias certificadas", "POST /v1/notifications", "Comunicacion con acuse de recibo sellado"),
        ],
        "regulacion": ["RASFF/AESAN", "Reg. (CE) 178/2002", "eIDAS", "CMR"],
    },
    "rrhh": {
        "title": "Trust API para RRHH & Laboral",
        "subtitle": "Registro jornada RD 8/2019, Despidos, PRL Art. 19",
        "escenarios": "18+ escenarios | Workday HCM | SAP SuccessFactors",
        "dolor": [
            ("Registro jornada", "RD 8/2019. Log sin timestamp cualificado es cuestionable. Sancion 625-6.250 EUR por trabajador."),
            ("Despidos sin notificar", "Email sin acuse certificado. Trabajador alega no recepcion. Despido improcedente: 15-50K EUR."),
            ("Formacion PRL", "Art. 19 LPRL. Sin evidencia cualificada de formacion, responsabilidad del empresario en accidente."),
        ],
        "soluciones": [
            ("Contratacion cualificada", "Workday Hire / SAP New Hire", "Contrato con firma cualificada automatica"),
            ("Despido con notificacion", "Workday Terminate", "Notificacion certificada al trabajador con acuse sellado"),
            ("Registro jornada sellado", "Time Tracking", "Cada fichaje con timestamp eIDAS cualificado"),
            ("Formacion PRL certificada", "Learning", "Timestamp de inicio, fin, contenido. Art. 19 LPRL"),
            ("Expediente laboral completo", "POST /v1/evidence-groups", "Todo el expediente como evidence group sellado"),
        ],
        "regulacion": ["RD 8/2019", "Art. 19 LPRL", "ET Art. 53-55", "eIDAS"],
    },
    "alimentacion": {
        "title": "Trust API para Alimentacion & APPCC",
        "subtitle": "Controles certificados, Cadena de frio IoT, AESAN",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Registros APPCC", "Hojas Excel y anotaciones manuales. Ante inspeccion de Sanidad, no demuestran nada."),
            ("Cadena de frio", "Sensores IoT sin timestamp cualificado. Si la temperatura subio, no tienes prueba de actuacion."),
            ("Trazabilidad lotes", "Alerta RASFF: necesitas trazabilidad completa en horas. Sin sellado, impugnable."),
        ],
        "soluciones": [
            ("Control APPCC certificado", "POST /v1/timestamps", "Puntos criticos sellados con timestamp eIDAS"),
            ("Cadena de frio IoT", "POST /v1/timestamps", "Sensores conectados. Cada lectura automaticamente sellada"),
            ("Trazabilidad lotes", "POST /v1/evidence", "Registro inmutable produccion → punto de venta"),
            ("Albaranes firmados", "POST /v1/signatures", "Firma receptor con geolocalizacion. Cierre de trazabilidad"),
        ],
        "regulacion": ["APPCC/HACCP", "AESAN/RASFF", "Reg. (CE) 852/2004", "eIDAS"],
    },
    "telecomunicaciones": {
        "title": "Trust API para Telecomunicaciones",
        "subtitle": "Contratacion certificada, Portabilidad, Reclamaciones",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Contratacion telefonica", "Grabaciones sin certificar. Sin prueba de consentimiento. Impugnable ante CNMC."),
            ("Portabilidad", "Solicitudes sin fecha cierta. Disputas sobre quien solicito primero."),
            ("Modificaciones", "Cambios de tarifa sin consentimiento certificado. Cada modificacion es reclamable."),
        ],
        "soluciones": [
            ("Grabacion certificada", "Evidence + Custody", "Audio sellado con timestamp inicio/fin. Custodia cualificada"),
            ("Portabilidad con timestamp", "POST /v1/timestamps", "Solicitud sellada con fecha cierta eIDAS"),
            ("Consentimiento a cambios", "POST /v1/evidence", "Cada cambio con consentimiento certificado del usuario"),
            ("Expediente reclamacion", "POST /v1/custody", "Todo el expediente en custodia cualificada"),
        ],
        "regulacion": ["LGTEL", "CNMC", "LSSI-CE", "eIDAS"],
    },
    "farmaceutico": {
        "title": "Trust API para Farmaceutico",
        "subtitle": "Batch Record QP, Validacion CSV, Farmacovigilancia",
        "escenarios": "20 escenarios de integracion",
        "dolor": [
            ("Batch Records", "Liberacion de lotes sin firma QP cualificada. Cadena de responsabilidad cuestionable ante AEMPS."),
            ("Validacion CSV", "Paquetes sin timestamp. Ante inspeccion GMP, no puedes demostrar cuando se ejecuto."),
            ("Farmacovigilancia", "Informes ICSR sin timestamp certificado. Plazos regulatorios no demostrables."),
        ],
        "soluciones": [
            ("Batch Record QP", "POST /v1/signatures/qualified", "Firma cualificada del Qualified Person"),
            ("Validacion CSV sellada", "POST /v1/evidence", "Paquete IQ/OQ/PQ con timestamp cualificado"),
            ("Farmacovigilancia ICSR", "POST /v1/timestamps", "Cada informe con timestamp de recepcion y reporte"),
            ("Serializacion FMD", "POST /v1/evidence", "Eventos de serializacion sellados. Cadena de custodia FMD"),
        ],
        "regulacion": ["GMP/GxP", "FMD (Dir. 2011/62/UE)", "Reg. Farmacovigilancia", "eIDAS"],
    },
}

def generate_pdf_html(sector_key: str) -> str:
    s = SECTOR_DATA.get(sector_key)
    if not s:
        return ""

    dolor_html = ""
    for title, desc in s["dolor"]:
        dolor_html += f'<div style="margin-bottom:12px;padding:10px 14px;background:#f9fafb;border-left:3px solid #009a77;border-radius:0 6px 6px 0;"><strong style="color:#004438;font-size:11px;">{title}</strong><br><span style="color:#6b7280;font-size:10px;">{desc}</span></div>'

    sol_html = ""
    for name, endpoint, desc in s["soluciones"]:
        sol_html += f'<tr><td style="padding:6px 10px;font-size:10px;font-weight:600;color:#004438;border-bottom:1px solid #f3f4f6;">{name}</td><td style="padding:6px 10px;font-size:9px;font-family:monospace;color:#009a77;border-bottom:1px solid #f3f4f6;">{endpoint}</td><td style="padding:6px 10px;font-size:10px;color:#6b7280;border-bottom:1px solid #f3f4f6;">{desc}</td></tr>'

    reg_html = " &middot; ".join(s["regulacion"])

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rubik:wght@300;400;500&display=swap');
@page {{ size: A4; margin: 0; }}
body {{ font-family: 'Rubik', sans-serif; color: #374151; margin: 0; padding: 0; }}
.header {{ background: linear-gradient(135deg, #003030, #004438); color: white; padding: 32px 40px 24px; }}
.header h1 {{ font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 700; margin: 0 0 6px; }}
.header p {{ font-size: 13px; color: rgba(255,255,255,0.7); margin: 0; }}
.header .badge {{ display: inline-block; background: rgba(0,154,119,0.3); border: 1px solid rgba(0,154,119,0.5); color: #009a77; font-size: 10px; font-weight: 600; padding: 3px 10px; border-radius: 12px; margin-top: 10px; }}
.content {{ padding: 24px 40px; }}
.section-title {{ font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #004438; margin: 18px 0 10px; padding-bottom: 4px; border-bottom: 2px solid #009a77; display: inline-block; }}
table {{ width: 100%; border-collapse: collapse; margin-top: 8px; }}
table thead {{ background: #004438; }}
table th {{ padding: 6px 10px; text-align: left; color: white; font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }}
.footer {{ background: #f9fafb; padding: 16px 40px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 0; left: 0; right: 0; }}
.footer-left {{ font-size: 10px; color: #6b7280; }}
.footer-right {{ font-size: 9px; color: #9ca3af; }}
.legal-box {{ background: #004438; color: white; padding: 14px 18px; border-radius: 8px; margin-top: 14px; }}
.legal-box p {{ font-size: 10px; margin: 0; line-height: 1.5; }}
.legal-box strong {{ color: #009a77; }}
.stats {{ display: flex; gap: 16px; margin-top: 12px; }}
.stat {{ text-align: center; padding: 8px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; }}
.stat-num {{ font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; color: #009a77; }}
.stat-label {{ font-size: 9px; color: rgba(255,255,255,0.5); margin-top: 2px; }}
.reg-badges {{ margin-top: 8px; }}
.reg-badge {{ display: inline-block; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 4px; padding: 2px 8px; font-size: 9px; font-weight: 500; color: #374151; margin: 2px 4px 2px 0; }}
</style>
</head>
<body>
<div class="header">
  <p style="font-size:10px;color:rgba(255,255,255,0.5);margin-bottom:8px;">g-digital &mdash; Grupo Garrigues</p>
  <h1>{s['title']}</h1>
  <p>{s['subtitle']}</p>
  <div class="stats">
    <div class="stat"><div class="stat-num">298</div><div class="stat-label">Escenarios totales</div></div>
    <div class="stat"><div class="stat-num">~45ms</div><div class="stat-label">Latencia API</div></div>
    <div class="stat"><div class="stat-num">99.99%</div><div class="stat-label">Uptime SLA</div></div>
    <div class="stat"><div class="stat-num">eIDAS</div><div class="stat-label">Cualificado</div></div>
  </div>
  <span class="badge">{s['escenarios']}</span>
</div>
<div class="content">
  <div class="section-title">Dolor sectorial</div>
  {dolor_html}

  <div class="section-title">Escenarios Trust API</div>
  <table>
    <thead><tr><th>Escenario</th><th>Endpoint</th><th>Resultado</th></tr></thead>
    <tbody>{sol_html}</tbody>
  </table>

  <div class="section-title">Marco regulatorio</div>
  <div class="reg-badges">{''.join(f'<span class="reg-badge">{r}</span>' for r in s["regulacion"])}</div>

  <div class="legal-box">
    <p><strong>Inversion de la carga de la prueba.</strong> Con servicios eIDAS cualificados, tus evidencias gozan de presuncion legal de autenticidad e integridad. La contraparte debe demostrar que son falsas (Art. 326.4 LEC, Art. 41.2 eIDAS).</p>
  </div>
</div>
<div class="footer">
  <div class="footer-left">g-digital (Grupo Garrigues) &middot; info@g-digital.garrigues.com &middot; Madrid</div>
  <div class="footer-right">Trust API &middot; Compliance Injection &middot; {reg_html}</div>
</div>
</body>
</html>"""


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.get("/api/pdf/{sector}")
async def generate_sector_pdf(sector: str):
    html_content = generate_pdf_html(sector)
    if not html_content:
        return HTMLResponse("Sector not found", status_code=404)

    try:
        from weasyprint import HTML
        pdf_bytes = HTML(string=html_content).write_pdf()
        return Response(
            content=pdf_bytes,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f'attachment; filename="g-digital-{sector}-one-pager.pdf"'
            }
        )
    except Exception as e:
        return HTMLResponse(f"PDF generation error: {str(e)}", status_code=500)


@app.get("/api/sectors")
async def list_sectors():
    return {"sectors": list(SECTOR_DATA.keys()), "total": len(SECTOR_DATA)}


# Static file serving
@app.get("/")
async def index():
    return FileResponse(os.path.join(STATIC_ROOT, "index.html"), media_type="text/html")

@app.get("/{path:path}")
async def catch_all(path: str):
    filepath = os.path.join(STATIC_ROOT, path)
    if os.path.exists(filepath) and os.path.isfile(filepath):
        return FileResponse(filepath)
    return FileResponse(os.path.join(STATIC_ROOT, "index.html"), media_type="text/html")
