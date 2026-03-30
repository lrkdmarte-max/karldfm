// ComputeSemiMonthlySalary.java
// MotorPH Payroll System - Task 8
// This program computes an employee's semi-monthly salary
// based on total hours worked and hourly rate.

import java.util.Scanner;

public class ComputeSemiMonthlySalary {

    public static void main(String[] args) {

        // === Create Scanner object for user input ===
        Scanner scanner = new Scanner(System.in);

        // === Program Plan ===
        // 1. Ask for employee information
        // 2. Collect hours worked and hourly rate
        // 3. Validate input values
        // 4. Compute semi-monthly salary
        // 5. Display payroll summary

        // === Collect Employee Information ===
        System.out.print("Enter Employee Name: ");
        String employeeName = scanner.nextLine();

        System.out.print("Enter Employee ID: ");
        String employeeID = scanner.nextLine();

        // === Collect Work Details ===
        System.out.print("Enter total hours worked for cutoff: ");
        double hoursWorked = scanner.nextDouble();

        System.out.print("Enter hourly rate: ");
        double hourlyRate = scanner.nextDouble();

        // === Conditional Validation ===
        // Check for invalid inputs
        if (hoursWorked <= 0 || hourlyRate <= 0) {
            System.out.println("\nInvalid input detected.");
            System.out.println("Hours worked and hourly rate must be greater than zero.");
        } else {

            // === Salary Computation ===
            double semiMonthlySalary = hoursWorked * hourlyRate;

            // === Display Payroll Summary ===
            System.out.println("\n===== MotorPH Payroll Summary =====");
            System.out.println("Employee Name : " + employeeName);
            System.out.println("Employee ID   : " + employeeID);
            System.out.println("Hours Worked  : " + hoursWorked);
            System.out.println("Hourly Rate   : ₱" + hourlyRate);
            System.out.println("-----------------------------------");
            System.out.println("Semi-Monthly Salary: ₱" + semiMonthlySalary);

            // Optional verification message
            System.out.println("\nComputation verified successfully!");
        }

        // Close scanner
        scanner.close();
    }
}