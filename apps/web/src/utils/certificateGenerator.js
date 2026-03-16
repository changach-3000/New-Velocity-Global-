import { jsPDF } from "jspdf";

export const generateCertificate = (studentName, courseName, completionDate, gradePercentage) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  const width = doc.internal.pageSize.getWidth();   // 297
  const height = doc.internal.pageSize.getHeight(); // 210

  // ─────────────────────────────────────────────
  // BACKGROUND — soft cream
  // ─────────────────────────────────────────────
  doc.setFillColor(252, 250, 245);
  doc.rect(0, 0, width, height, "F");

  // ─────────────────────────────────────────────
  // DECORATIVE CORNER ORNAMENTS (drawn with lines)
  // ─────────────────────────────────────────────
  const drawCornerOrnament = (x, y, flipX, flipY) => {
    const sx = flipX ? -1 : 1;
    const sy = flipY ? -1 : 1;
    doc.setLineWidth(1.5);
    doc.setDrawColor(30, 58, 138);
    // L-shaped thick lines
    doc.line(x, y, x + sx * 20, y);
    doc.line(x, y, x, y + sy * 20);
    // Inner thin decorative lines
    doc.setLineWidth(0.4);
    doc.setDrawColor(180, 160, 100);
    doc.line(x + sx * 3, y + sy * 3, x + sx * 18, y + sy * 3);
    doc.line(x + sx * 3, y + sy * 3, x + sx * 3, y + sy * 18);
  };

  drawCornerOrnament(12, 12, false, false);  // top-left
  drawCornerOrnament(width - 12, 12, true, false);   // top-right
  drawCornerOrnament(12, height - 12, false, true);  // bottom-left
  drawCornerOrnament(width - 12, height - 12, true, true); // bottom-right

  // ─────────────────────────────────────────────
  // OUTER BORDER — navy
  // ─────────────────────────────────────────────
  doc.setLineWidth(2.5);
  doc.setDrawColor(30, 58, 138);
  doc.rect(12, 12, width - 24, height - 24);

  // INNER BORDER — gold
  doc.setLineWidth(0.8);
  doc.setDrawColor(180, 150, 70);
  doc.rect(17, 17, width - 34, height - 34);

  // ─────────────────────────────────────────────
  // LEFT ACCENT BAR
  // ─────────────────────────────────────────────
  doc.setFillColor(30, 58, 138);
  doc.rect(12, 12, 8, height - 24, "F");

  // Gold stripe on accent bar
  doc.setFillColor(180, 150, 70);
  doc.rect(18, 12, 1.5, height - 24, "F");

  // ─────────────────────────────────────────────
  // HEADER AREA — navy band
  // ─────────────────────────────────────────────
  doc.setFillColor(30, 58, 138);
  doc.rect(20, 20, width - 40, 28, "F");

  // Organisation name in header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(180, 150, 70);
  doc.text("VELOCITY GLOBAL LEASING", width / 2, 30, { align: "center" });

  // Header title
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("CERTIFICATE OF COMPLETION", width / 2, 42, { align: "center" });

  // ─────────────────────────────────────────────
  // GOLD DIVIDER BELOW HEADER
  // ─────────────────────────────────────────────
  doc.setLineWidth(1);
  doc.setDrawColor(180, 150, 70);
  doc.line(40, 52, width - 40, 52);

  // ─────────────────────────────────────────────
  // BODY TEXT
  // ─────────────────────────────────────────────

  // "This is to certify that"
  doc.setFont("helvetica", "italic");
  doc.setFontSize(13);
  doc.setTextColor(100, 95, 85);
  doc.text("This is to certify that", width / 2, 68, { align: "center" });

  // Student Name
  doc.setFont("times", "bolditalic");
  doc.setFontSize(38);
  doc.setTextColor(20, 20, 50);
  doc.text(studentName, width / 2, 90, { align: "center" });

  // Name underline — gold
  const nameWidth = doc.getTextWidth(studentName);
  const underlineHalf = Math.min(nameWidth / 2 + 10, 80);
  doc.setLineWidth(0.7);
  doc.setDrawColor(180, 150, 70);
  doc.line(width / 2 - underlineHalf, 94, width / 2 + underlineHalf, 94);

  // "has successfully completed"
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(100, 95, 85);
  doc.text("has successfully completed the course", width / 2, 107, { align: "center" });

  // Course Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(30, 58, 138);

  // Wrap long course names
  const maxCourseWidth = width - 100;
  const courseLines = doc.splitTextToSize(courseName, maxCourseWidth);
  const courseY = courseLines.length > 1 ? 120 : 124;
  doc.text(courseLines, width / 2, courseY, { align: "center" });

  // ─────────────────────────────────────────────
  // DETAILS ROW — date + grade side by side
  // ─────────────────────────────────────────────
  const detailsY = 148;

  const dateStr = new Date(completionDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Completion date block
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 58, 138);
  doc.text("DATE OF COMPLETION", width / 2 - 50, detailsY, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.text(dateStr, width / 2 - 50, detailsY + 7, { align: "center" });

  // Vertical divider
  doc.setLineWidth(0.5);
  doc.setDrawColor(180, 150, 70);
  doc.line(width / 2, detailsY - 5, width / 2, detailsY + 10);

  // Final grade block
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 58, 138);
  doc.text("FINAL GRADE", width / 2 + 50, detailsY, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.text(`${gradePercentage}%`, width / 2 + 50, detailsY + 7, { align: "center" });

  // ─────────────────────────────────────────────
  // GOLD DIVIDER ABOVE FOOTER
  // ─────────────────────────────────────────────
  doc.setLineWidth(0.8);
  doc.setDrawColor(180, 150, 70);
  doc.line(40, 162, width - 40, 162);

  // ─────────────────────────────────────────────
  // FOOTER — signature left, seal area right
  // ─────────────────────────────────────────────
  const sigX = 75;
  const sigY = 180;

  // Simulated cursive signature using Times italic at an angle
  // jsPDF doesn't support rotation per-text easily without transforms,
  // so we style it to look handwritten using a large italic serif
  doc.setFont("times", "bolditalic");
  doc.setFontSize(20);
  doc.setTextColor(20, 30, 80);
  doc.text("V. Global Leasing", sigX, sigY - 4, { align: "center" });

  // Signature line
  doc.setLineWidth(0.6);
  doc.setDrawColor(60, 60, 60);
  doc.line(sigX - 35, sigY, sigX + 35, sigY);

  // Role label
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Authorised Signatory", sigX, sigY + 5, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(30, 58, 138);
  doc.text("Velocity Global Leasing", sigX, sigY + 10, { align: "center" });

  // ── Seal area (right side) ──
  const sealX = width - 75;
  const sealY = 174;
  const sealR = 18;

  // Outer circle
  doc.setLineWidth(1.5);
  doc.setDrawColor(180, 150, 70);
  doc.circle(sealX, sealY, sealR);

  // Inner circle
  doc.setLineWidth(0.5);
  doc.circle(sealX, sealY, sealR - 3);

  // Seal text (curved look approximated)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6);
  doc.setTextColor(30, 58, 138);
  doc.text("VELOCITY GLOBAL LEASING", sealX, sealY - 8, { align: "center" });
  doc.text("OFFICIAL SEAL", sealX, sealY + 2, { align: "center" });
  doc.text("CERTIFIED", sealX, sealY + 8, { align: "center" });

  // Star decoration inside seal
  doc.setFontSize(14);
  doc.setTextColor(180, 150, 70);
  doc.text("★", sealX, sealY - 1, { align: "center" });

  // ─────────────────────────────────────────────
  // CERTIFICATE ID — bottom center
  // ─────────────────────────────────────────────
  const certId = Math.random().toString(36).substr(2, 9).toUpperCase();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(160, 155, 145);
  doc.text(`Certificate ID: ${certId}  •  Issued by Velocity Global Leasing  •  velocitygloballeasing.com`, width / 2, height - 8, { align: "center" });

  // ─────────────────────────────────────────────
  // SAVE
  // ─────────────────────────────────────────────
  const safeName = studentName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeCourse = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  doc.save(`Certificate_${safeName}_${safeCourse}.pdf`);
};