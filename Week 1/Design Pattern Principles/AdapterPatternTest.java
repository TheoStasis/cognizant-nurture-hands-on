
interface PaymentProcessor {
    void processPayment(double amount);
}

class PayPalGateway {

    public void sendPayment(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using PayPal.");
    }
}

class StripeGateway {

    public void makeTransaction(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using Stripe.");
    }
}

class PayPalAdapter implements PaymentProcessor {

    private PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal) {
        this.paypal = paypal;
    }

    @Override
    public void processPayment(double amount) {
        paypal.sendPayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor {

    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    @Override
    public void processPayment(double amount) {
        stripe.makeTransaction(amount);
    }
}

public class AdapterPatternTest {

    public static void main(String[] args) {

        PaymentProcessor paypalProcessor =
                new PayPalAdapter(new PayPalGateway());

        paypalProcessor.processPayment(2500);

        PaymentProcessor stripeProcessor =
                new StripeAdapter(new StripeGateway());

        stripeProcessor.processPayment(4500);
    }
}