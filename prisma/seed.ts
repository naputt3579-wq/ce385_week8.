import { prisma } from "../src/lib/prisma.js";

const students = [
  { code: "66010001", name: "สมชาย ใจดี", email: "somchai@dpu.ac.th", score: 78 },
  { code: "66010002", name: "สมหญิง รักเรียน", email: "somying@dpu.ac.th", score: 92 },
  { code: "66010003", name: "วีรภาพ ตั้งใจ", email: "weeraphap@dpu.ac.th", score: 65 },
  { code: "66010004", name: "ปรียา ขยันทำ", email: "preeya@dpu.ac.th", score: 88 },
  { code: "66010005", name: "ธนกร ไม่ยอมแพ้", email: "thanakorn@dpu.ac.th", score: 54, active: false },
];

async function main() {
  await prisma.student.deleteMany();
  await prisma.student.createMany({ data: students, skipDuplicates: true });
}

main()
  .catch((err) => { console.error(err); process.exit(1); })
  .finally(() => prisma.$disconnect());