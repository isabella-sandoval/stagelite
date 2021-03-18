class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def update
    @event = Event.find(params[:event][:id])
    @event.update_attributes(event_params)
    @event.organizer_id = current_user.id

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end

  end  

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end  

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end


  private

  def event_params
    params.require(:event).permit(:title, :venue, :date, :time, :address, :genre_id, :price, :capacity, :age_restriction, :quantity, :ticket_link, :photo)
  end
  
  
end
