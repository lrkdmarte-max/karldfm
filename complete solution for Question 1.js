import java.io.FileReader;
import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;

public class QuickCartFilePractice {

    // Inner class to represent an Item
    static class Item {
        String name;
        double price;

        Item(String name, double price) {
            this.name = name;
            this.price = price;
        }
    }

    // Method to read items from items.txt
    public static ArrayList<Item> readItems(String filename) {
        ArrayList<Item> items = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (line.trim().isEmpty()) continue; // skip empty lines
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    String name = parts[0].trim();
                    double price = Double.parseDouble(parts[1].trim());
                    items.add(new Item(name, price));
                } else {
                    System.out.println("Skipping invalid line: " + line);
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
        return items;
    }

    // Method to compute total price
    public static double computeTotal(ArrayList<Item> items) {
        double total = 0;
        for (Item item : items) {
            total += item.price;
        }
        return total;
    }

    // Method to apply discount based on total
    public static double applyDiscount(double total) {
        double discount = 0;
        if (total > 1000) {
            discount = total * 0.10; // 10% discount
        } else if (total > 500) {
            discount = total * 0.05; // 5% discount
        }
        return total - discount;
    }

    // Method to write receipt to receipt.txt
    public static void writeReceipt(String filename, ArrayList<Item> items, double total) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename))) {
            bw.write("QuickCart Receipt\n");
            bw.write("-------------------\n");
            double subtotal = computeTotal(items);
            for (Item item : items) {
                bw.write(item.name + " - ₱" + String.format("%.2f", item.price) + "\n");
            }
            double finalTotal = applyDiscount(subtotal);
            double discount = subtotal - finalTotal;
            bw.write("-------------------\n");
            bw.write("Subtotal: ₱" + String.format("%.2f", subtotal) + "\n");
            bw.write("Discount: ₱" + String.format("%.2f", discount) + "\n");
            bw.write("Total: ₱" + String.format("%.2f", finalTotal) + "\n");
            System.out.println("Receipt successfully written to " + filename);
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        ArrayList<Item> items = readItems("items.txt");
        System.out.println("Checkout Summary:");
        for (Item item : items) {
            System.out.println(item.name + "," + item.price);
        }
        double total = computeTotal(items);
        System.out.println("Total: " + total);
        writeReceipt("receipt.txt", items, total);
    }
}