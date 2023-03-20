class InstrumentsController < ApplicationController

    def index 
        instruments = Instrument.all 

        render json: instruments

    end

    def show 
        instrument = Instrument.find_by(id: params[:id])
        if instrument 
            render json: instrument
        else 
            render json: {error: "not found"}, status: :not_found 
        end
    end
end
