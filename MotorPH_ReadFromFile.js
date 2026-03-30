import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.File;

public class MotorPH_ReadFromFile {

    // Method to compute SSS deduction (example percentage)
    public static double computeSSS(double gross) {
        return gross * 0.11; // 11% for example
    }

    // Method to compute PhilHealth deduction (example percentage)
    public static double computePhilHealth(double gross) {
        return gross * 0.035; // 3.5% for example
    }

    // Method to compute Pag-IBIG deduction (example fixed or percentage)
    public static double computePagIBIG(double gross) {
        return gross * 0.02; // 2% for example
    }

    // Method to compute Income Tax (example progressive calculation)
    public static double computeIncomeTax(double gross) {
        if (gross <= 25000) {
            return gross * 0.10;
        } else if (gross <= 50000) {
            return gross * 0.15;
        } else {
            return gross * 0.20;
        }
    }

    // Method to compute Net Pay
    public static double computeNetPay(double gross) {
        double sss = computeSSS(gross);
        double phil = computePhilHealth(gross);
        double pagibig = computePagIBIG(gross);
        double tax = computeIncomeTax(gross);
        return gross - (sss + phil + pagibig + tax);
    }

    public static void main(String[] args) {

        String fileName = "employee_data.txt"; // Input file

        File file = new File(fileName);

        // Check if file exists and is readable
        if (!file.exists()) {
            System.out.println("Error: File " + fileName + " does not exist.");
            return;
        }
        if (!file.canRead()) {
            System.out.println("Error: File " + fileName + " cannot be read.");
            return;
        }

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {

            String line;
            System.out.println("MotorPH Payroll Summary");
            System.out.println("----------------------------");

            while ((line = br.readLine()) != null) {
                line = line.trim();
                if (line.isEmpty()) continue; // Skip empty lines

                String[] parts = line.split(",");
                if (parts.length != 2) {
                    System.out.println("Skipping invalid record: " + line);
                    continue;
                }

                String name = parts[0].trim();
                double grossSalary;

                try {
                    grossSalary = Double.parseDouble(parts[1].trim());
                    if (grossSalary < 0) {
                        System.out.println("Invalid salary for " + name + ". Must be positive.");
                        continue;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid salary format for " + name + ": " + parts[1]);
                    continue;
                }

                // Compute deductions
                double sss = computeSSS(grossSalary);
                double phil = computePhilHealth(grossSalary);
                double pagibig = computePagIBIG(grossSalary);
                double tax = computeIncomeTax(grossSalary);
                double netPay = computeNetPay(grossSalary);

                // Display summary
                System.out.println("Employee Name: " + name);
                System.out.printf("Gross Salary: %.2f\n", grossSalary);
                System.out.printf("SSS Deduction: %.2f\n", sss);
                System.out.printf("PhilHealth Deduction: %.2f\n", phil);
                System.out.printf("Pag-IBIG Deduction: %.2f\n", pagibig);
                System.out.printf("Income Tax: %.2f\n", tax);
                System.out.printf("Net Pay: %.2f\n", netPay);
                System.out.println("----------------------------");
            }

        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }

    }
}