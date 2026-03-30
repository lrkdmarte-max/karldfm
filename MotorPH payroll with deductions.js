import java.util.Scanner;

public class MotorPH_ApplyDeductions {

    // Method to compute gross pay based on hours worked and hourly rate
    public static double computeGrossPay(double hoursWorked, double hourlyRate) {
        return hoursWorked * hourlyRate;
    }

    // Method to compute SSS deduction (example rate: 4%)
    public static double computeSSS(double grossPay) {
        return grossPay * 0.04;
    }

    // Method to compute PhilHealth deduction (example rate: 3%)
    public static double computePhilHealth(double grossPay) {
        return grossPay * 0.03;
    }

    // Method to compute Pag-IBIG deduction (example rate: 2%)
    public static double computePagIbig(double grossPay) {
        return grossPay * 0.02;
    }

    // Method to compute Income Tax deduction (example rate: 5%)
    public static double computeIncomeTax(double grossPay) {
        return grossPay * 0.05;
    }

    // Method to compute net pay after all deductions
    public static double computeNetPay(double grossPay) {
        double sss = computeSSS(grossPay);
        double philHealth = computePhilHealth(grossPay);
        double pagIbig = computePagIbig(grossPay);
        double incomeTax = computeIncomeTax(grossPay);

        double totalDeductions = sss + philHealth + pagIbig + incomeTax;
        return grossPay - totalDeductions;
    }

    // Method to display all payroll details
    public static void displayPayroll(double grossPay) {
        double sss = computeSSS(grossPay);
        double philHealth = computePhilHealth(grossPay);
        double pagIbig = computePagIbig(grossPay);
        double incomeTax = computeIncomeTax(grossPay);
        double totalDeductions = sss + philHealth + pagIbig + incomeTax;
        double netPay = computeNetPay(grossPay);

        System.out.println("\n--- Payroll Summary ---");
        System.out.printf("Gross Salary: ₱%.2f\n", grossPay);
        System.out.printf("SSS Deduction: ₱%.2f\n", sss);
        System.out.printf("PhilHealth Deduction: ₱%.2f\n", philHealth);
        System.out.printf("Pag-IBIG Deduction: ₱%.2f\n", pagIbig);
        System.out.printf("Income Tax Deduction: ₱%.2f\n", incomeTax);
        System.out.printf("Total Deductions: ₱%.2f\n", totalDeductions);
        System.out.printf("Net Pay: ₱%.2f\n", netPay);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Welcome to MotorPH Payroll System!");

        // Input hours worked and hourly rate
        System.out.print("Enter total hours worked: ");
        double hoursWorked = sc.nextDouble();
        if (hoursWorked < 0) {
            System.out.println("Hours worked must be a positive number.");
            return;
        }

        System.out.print("Enter hourly rate: ₱");
        double hourlyRate = sc.nextDouble();
        if (hourlyRate < 0) {
            System.out.println("Hourly rate must be a positive number.");
            return;
        }

        // Compute gross pay
        double grossPay = computeGrossPay(hoursWorked, hourlyRate);

        // Display payroll summary
        displayPayroll(grossPay);
    }
}