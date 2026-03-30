import java.util.Scanner;

/**
 * MotorPH Payroll System
 * This program computes semi-monthly salaries for employees, including government deductions
 * such as SSS, PhilHealth, Pag-IBIG, and Income Tax. It calculates gross pay, total deductions,
 * and net pay, displaying a clear summary.
 */
public class MotorPH_ApplyDeductions {

    // Deduction rates (constants)
    public static final double SSS_RATE = 0.04;          // 4% SSS deduction
    public static final double PHILHEALTH_RATE = 0.03;   // 3% PhilHealth deduction
    public static final double PAGIBIG_RATE = 0.02;      // 2% Pag-IBIG deduction
    public static final double INCOME_TAX_RATE = 0.05;   // 5% Income Tax deduction

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input hours worked and hourly rate
        System.out.print("Enter total hours worked: ");
        double hoursWorked = sc.nextDouble();

        System.out.print("Enter hourly rate: ");
        double hourlyRate = sc.nextDouble();

        // Validate inputs
        if (hoursWorked <= 0 || hourlyRate <= 0) {
            System.out.println("Error: Hours worked and hourly rate must be positive numbers.");
            return;
        }

        // Compute gross pay
        double grossPay = computeGrossPay(hoursWorked, hourlyRate);

        // Compute net pay
        double netPay = computeNetPay(grossPay);

        // Display payroll summary
        displayPayroll(grossPay, netPay);
    }

    /**
     * Computes gross salary based on hours worked and hourly rate.
     * @param hoursWorked Total hours worked (double)
     * @param hourlyRate Hourly rate of employee (double)
     * @return Gross salary as double
     */
    public static double computeGrossPay(double hoursWorked, double hourlyRate) {
        return hoursWorked * hourlyRate;
    }

    /**
     * Computes SSS deduction from gross salary.
     * @param grossPay Gross salary (double)
     * @return SSS deduction as double
     */
    public static double computeSSS(double grossPay) {
        return grossPay * SSS_RATE;
    }

    /**
     * Computes PhilHealth deduction from gross salary.
     * @param grossPay Gross salary (double)
     * @return PhilHealth deduction as double
     */
    public static double computePhilHealth(double grossPay) {
        return grossPay * PHILHEALTH_RATE;
    }

    /**
     * Computes Pag-IBIG deduction from gross salary.
     * @param grossPay Gross salary (double)
     * @return Pag-IBIG deduction as double
     */
    public static double computePagIbig(double grossPay) {
        return grossPay * PAGIBIG_RATE;
    }

    /**
     * Computes Income Tax deduction from gross salary.
     * @param grossPay Gross salary (double)
     * @return Income Tax deduction as double
     */
    public static double computeIncomeTax(double grossPay) {
        return grossPay * INCOME_TAX_RATE;
    }

    /**
     * Computes net pay after all deductions.
     * @param grossPay Gross salary (double)
     * @return Net pay as double
     */
    public static double computeNetPay(double grossPay) {
        double totalDeductions = computeSSS(grossPay) +
                                 computePhilHealth(grossPay) +
                                 computePagIbig(grossPay) +
                                 computeIncomeTax(grossPay);

        double netPay = grossPay - totalDeductions;

        // Round to 2 decimal places for currency
        netPay = Math.round(netPay * 100.0) / 100.0;
        return netPay;
    }

    /**
     * Displays a payroll summary including gross pay, deductions, total deductions, and net pay.
     * @param grossPay Gross salary (double)
     * @param netPay Net pay after deductions (double)
     */
    public static void displayPayroll(double grossPay, double netPay) {
        double sss = computeSSS(grossPay);
        double philHealth = computePhilHealth(grossPay);
        double pagIbig = computePagIbig(grossPay);
        double incomeTax = computeIncomeTax(grossPay);
        double totalDeductions = sss + philHealth + pagIbig + incomeTax;

        System.out.println("\n--- Payroll Summary ---");
        System.out.printf("Gross Salary: ₱%.2f%n", grossPay);
        System.out.printf("SSS Deduction: ₱%.2f%n", sss);
        System.out.printf("PhilHealth Deduction: ₱%.2f%n", philHealth);
        System.out.printf("Pag-IBIG Deduction: ₱%.2f%n", pagIbig);
        System.out.printf("Income Tax Deduction: ₱%.2f%n", incomeTax);
        System.out.printf("Total Deductions: ₱%.2f%n", totalDeductions);
        System.out.printf("Net Pay: ₱%.2f%n", netPay);
    }
}