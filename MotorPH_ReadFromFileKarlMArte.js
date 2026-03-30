/**
 * MotorPH Payroll System
 * 
 * This program reads employee payroll data from a text file and calculates
 * government-mandated deductions and net pay for each employee.
 * 
 * Author: Karl Daniel Marte
 * GitHub: your-github-username
 * Date: 03/30/2026
 * 
 * Features:
 * - Reads employee names and gross salaries from a text file
 * - Computes SSS, PhilHealth, Pag-IBIG, and Income Tax deductions
 * - Calculates net pay
 * - Displays a formatted payroll summary for each employee
 * - Includes file validation and basic error handling
 */

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class MotorPH_ReadFromFile {

    // Constants for deduction rates (replace with actual government rates if available)
    private static final double SSS_RATE = 0.11;        // Example rate
    private static final double PHILHEALTH_RATE = 0.035; // Example rate
    private static final double PAGIBIG_RATE = 0.02;     // Example rate
    private static final double INCOME_TAX_RATE = 0.10;  // Example rate

    /**
     * Computes the SSS deduction based on gross salary
     */
    public static double computeSSS(double grossSalary) {
        return grossSalary * SSS_RATE;
    }

    /**
     * Computes the PhilHealth deduction based on gross salary
     */
    public static double computePhilHealth(double grossSalary) {
        return grossSalary * PHILHEALTH_RATE;
    }

    /**
     * Computes the Pag-IBIG deduction based on gross salary
     */
    public static double computePagIBIG(double grossSalary) {
        return grossSalary * PAGIBIG_RATE;
    }

    /**
     * Computes the Income Tax deduction based on gross salary
     */
    public static double computeIncomeTax(double grossSalary) {
        return grossSalary * INCOME_TAX_RATE;
    }

    /**
     * Computes net pay after all deductions
     */
    public static double computeNetPay(double grossSalary) {
        double sss = computeSSS(grossSalary);
        double philhealth = computePhilHealth(grossSalary);
        double pagibig = computePagIBIG(grossSalary);
        double incomeTax = computeIncomeTax(grossSalary);
        return grossSalary - (sss + philhealth + pagibig + incomeTax);
    }

    /**
     * Main method
     * Reads employee data from a text file and prints payroll summary
     */
    public static void main(String[] args) {
        String fileName = "employee_data.txt"; // File containing employee name and salary
        File file = new File(fileName);

        // Check if file exists and is readable
        if (!file.exists() || !file.canRead()) {
            System.out.println("Error: File does not exist or cannot be read.");
            return;
        }

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;

            System.out.println("========== MotorPH Payroll System ==========");
            while ((line = br.readLine()) != null) {
                // Skip empty lines
                if (line.trim().isEmpty()) continue;

                // Split line into name and salary
                String[] parts = line.split(",");
                if (parts.length != 2) {
                    System.out.println("Invalid record format: " + line);
                    continue; // Skip invalid lines
                }

                String name = parts[0].trim();
                double grossSalary = 0;

                // Validate salary
                try {
                    grossSalary = Double.parseDouble(parts[1].trim());
                    if (grossSalary <= 0) {
                        System.out.println("Invalid salary for employee " + name + ": " + grossSalary);
                        continue;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid number format for employee " + name + ": " + parts[1].trim());
                    continue;
                }

                // Compute deductions
                double sss = computeSSS(grossSalary);
                double philhealth = computePhilHealth(grossSalary);
                double pagibig = computePagIBIG(grossSalary);
                double incomeTax = computeIncomeTax(grossSalary);
                double netPay = computeNetPay(grossSalary);

                // Display payroll summary
                System.out.println("------------------------------------------");
                System.out.println("Employee Name: " + name);
                System.out.printf("Gross Salary : PHP %.2f%n", grossSalary);
                System.out.printf("SSS          : PHP %.2f%n", sss);
                System.out.printf("PhilHealth   : PHP %.2f%n", philhealth);
                System.out.printf("Pag-IBIG     : PHP %.2f%n", pagibig);
                System.out.printf("Income Tax   : PHP %.2f%n", incomeTax);
                System.out.printf("Net Pay      : PHP %.2f%n", netPay);
            }
            System.out.println("==========================================");

        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}