export enum OrderStatus {
    // When the order has been created, but the ticket it is trying to order has not been reserved
    Created = "created",
    // When the ticket the order is trying to reserve has already been reserved
    // or when the user has cancelled the order
    // or the order expires before payment
    Cancelled = "cancelled",
    // The order has successfully reserved the ticket and the user has provided payment successfully
    Complete = "completed",
    // The order has been reserved, but the user has not provided payment
    AwaitingPayment = "awaiting:payment",
}