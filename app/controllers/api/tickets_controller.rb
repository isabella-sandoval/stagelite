class Api::TicketsController < ApplicationController
    def create
        @ticket = Ticket.new(ticket_params)
        @ticket.user_id = current_user.id

        if @ticket.save
            render 'api/tickets/index'
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    def index
        # @tickets.user_id = current_user.id
        @tickets = Ticket.where(user_id: current_user.id)
    end
    
    def destroy
        # debugger
        @ticket = Ticket.find(params[:id])
        # @tickets = Ticket.where(user_id: params[:user_id])

         if @ticket
            @ticket.destroy
           render :show
         else
            render json: @ticket.errors.full_messages, status: 422
         end  
         
    end


    private

    def ticket_params
        params.require(:ticket).permit(:event_id, :quantity)
    end
end
