class PaymentsController < ApplicationController

    def create 
        token = params[:stripeToken]
        charge = Stripe::Charge.create(
        :amount => params[:selectedInstrument][:price],
        :currency => 'USD',
        :description => 'My Payment Wall',
        :source => token,
    )
    render json: { message: 'Payment processed successfully!' }
    rescue Stripe::CardError => e
  # handle card errors
    render json: { error: e.message }, status: :unprocessable_entity
  end    
end
