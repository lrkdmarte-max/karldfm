import java.io.*;

/**
 * MotorPH_ReadFromFile
 * 
 * This program reads employee payroll data from a text file named "employee_data.txt",
 * calculates government deductions (SSS, PhilHealth, Pag-IBIG, Income Tax),
 * and prints a summary of each employee's net pay.
 * 
 * Author: Karl Daniel Marte
 * Version: 1.0
 */
public class MotorPH_ReadFromFile {

    // Constants for government deduction rates
    final static double SSS_RATE = 0.11;          // 11% of gross salary
    final static double PHILHEALTH_RATE = 0.035;  // 3.5% of gross salary
    final static double PAGIBIG_RATE = 0.02;      // 2% of gross salary
    final static double INCOME_TAX_RATE = 0.10;   // 10% income tax for simplicity

    public static void main(String[] args) {
        String fileName = "employee_data.txt"; // Input file containing employee records

        // Attempt to read the file and process payroll
        try {
            File file = new File(fileName);

            // Validate that the file exists and is readable
            if (!file.exists() || !file.canRead()) {
                System.out.println("Error: File does not exist or cannot be read.");
                return;
            }

            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line;

            System.out.println("===== MOTORPH PAYROLL SUMMARY =====\n");

            // Read each line of the file
            while ((line = reader.readLine()) != null) {
                line = line.trim();

                // Skip empty lines
                if (line.isEmpty()) continue;

                String[] parts = line.split(",");

                // Validate proper formatting: must have exactly 2 fields
                if (parts.length != 2) {
                    System.out.println("Invalid record format: " + line);
                    continue;
                }

                String employeeName = parts[0].trim();
                double grossSalary = 0;

                // Validate salary as a positive number
                try {
                    grossSalary = Double.parseDouble(parts[1].trim());
                    if (grossSalary <= 0) {
                        System.out.println("Invalid salary for " + employeeName + ": " + grossSalary);
                        continue;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid salary format for " + employeeName + ": " + parts[1].trim());
                    continue;
                }

                // Compute deductions using separate methods
                double sssDeduction = computeSSS(grossSalary);
                double philHealthDeduction = computePhilHealth(grossSalary);
                double pagIBIGDeduction = computePagIBIG(grossSalary);
                double incomeTax = computeIncomeTax(grossSalary);

                // Compute net pay
                double netPay = computeNetPay(grossSalary, sssDeduction, philHealthDeduction, pagIBIGDeduction, incomeTax);

                // Display payroll summary for this employee
                System.out.println("Employee Name: " + employeeName);
                System.out.printf("Gross Salary: %.2f\n", grossSalary);
                System.out.printf("SSS Deduction: %.2f\n", sssDeduction);
                System.out.printf("PhilHealth Deduction: %.2f\n", philHealthDeduction);
                System.out.printf("Pag-IBIG Deduction: %.2f\n", pagIBIGDeduction);
                System.out.printf("Income Tax: %.2f\n", incomeTax);
                System.out.printf("Net Pay: %.2f\n", netPay);
                System.out.println("-----------------------------------");
            }

            reader.close();

        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }
    }

    /**
     * Computes SSS deduction.
     * @param gross Gross salary of employee
     * @return SSS deduction amount
     */
    public static double computeSSS(double gross) {
        return gross * SSS_RATE;
    }

    /**
     * Computes PhilHealth deduction.
     * @param gross Gross salary of employee
     * @return PhilHealth deduction amount
     */
    public static double computePhilHealth(double gross) {
        return gross * PHILHEALTH_RATE;
    }

    /**
     * Computes Pag-IBIG deduction.
     * @param gross Gross salary of employee
     * @return Pag-IBIG deduction amount
     */
    public static double computePagIBIG(double gross) {
        return gross * PAGIBIG_RATE;
    }

    /**
     * Computes income tax.
     * @param gross Gross salary of employee
     * @return Income tax amount
     */
    public static double computeIncomeTax(double gross) {
        return gross * INCOME_TAX_RATE;
    }

    /**
     * Computes net pay by subtracting all deductions from gross salary.
     * @param gross Gross salary
     * @param sss SSS deduction
     * @param phil PhilHealth deduction
     * @param pagIBIG Pag-IBIG deduction
     * @param tax Income tax
     * @return Net pay
     */
    public static double computeNetPay(double gross, double sss, double phil, double pagIBIG, double tax) {
        return gross - sss - phil - pagIBIG - tax;
    }
}