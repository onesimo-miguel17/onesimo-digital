export function SocialImage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "68px 76px",
        color: "#f7f4ed",
        backgroundColor: "#080808",
        backgroundImage:
          "radial-gradient(circle at 78% 45%, rgba(214,181,109,0.18), transparent 34%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "62px",
            height: "62px",
            border: "1px solid rgba(214,181,109,0.75)",
            color: "#e7ca8a",
            fontSize: "25px",
            fontWeight: 700,
            letterSpacing: "-5px",
          }}
        >
          OD.
        </div>
        <div
          style={{
            display: "flex",
            color: "#f7f4ed",
            fontSize: "19px",
            fontWeight: 700,
            letterSpacing: "4px",
          }}
        >
          ONÉSIMO <span style={{ color: "#d6b56d", marginLeft: "8px" }}>DIGITAL</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div
          style={{
            display: "flex",
            color: "#d6b56d",
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "5px",
          }}
        >
          ESTRATÉGIA · DESIGN · TECNOLOGIA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "900px",
            fontSize: "76px",
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-4px",
          }}
        >
          <span>Ideias grandes.</span>
          <span style={{ color: "#d6b56d" }}>Impacto real.</span>
          <span>Futuro digital.</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.18)",
          paddingTop: "22px",
          color: "rgba(247,244,237,0.68)",
          fontSize: "16px",
          letterSpacing: "2px",
        }}
      >
        <span>LUANDA, ANGOLA</span>
        <span>ONESIMO-DIGITAL.VERCEL.APP</span>
      </div>
    </div>
  );
}
