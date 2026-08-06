export interface EMIInput {
  loanAmount: number;
  annualInterestRate: number;
  tenureMonths: number;
}

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

export interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export function calculateEMI({
  loanAmount,
  annualInterestRate,
  tenureMonths,
}: EMIInput): EMIResult {
  const monthlyRate = annualInterestRate / 12 / 100;

  if (monthlyRate === 0) {
    const emi = loanAmount / tenureMonths;

    return {
      emi,
      totalInterest: 0,
      totalPayment: loanAmount,
    };
  }

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const totalPayment = emi * tenureMonths;

  const totalInterest = totalPayment - loanAmount;

  return {
    emi,
    totalInterest,
    totalPayment,
  };
}

export function generateAmortizationSchedule({
  loanAmount,
  annualInterestRate,
  tenureMonths,
}: EMIInput): AmortizationRow[] {
  const monthlyRate = annualInterestRate / 12 / 100;

  const { emi } = calculateEMI({
    loanAmount,
    annualInterestRate,
    tenureMonths,
  });

  let balance = loanAmount;

  const schedule: AmortizationRow[] = [];

  for (let month = 1; month <= tenureMonths; month++) {
    const interest = balance * monthlyRate;

    const principal = emi - interest;

    balance -= principal;

    schedule.push({
      month,
      emi,
      principal,
      interest,
      balance: balance < 0 ? 0 : balance,
    });
  }

  return schedule;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}