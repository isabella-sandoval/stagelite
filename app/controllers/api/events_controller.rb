class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)

    if @event.save
      render 'api/events/show'
    else
      render json @event.errors.full_messages, status: 422
      # render json: {errors: "This event does not exist"}, status: 422
    end

  end

  def update
    @event = Event.find(params[:event][:id])
    @event.update_attributes(event_params)

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end

  end  

  def index
    @events = Event.all
    # render :index
  end

  def show
    @event = Event.find(params[:id])
    render 'api/events/show'
  end  

  def destroy
      @event = Event.find_by(id: params[:id])

        if @event.destroy
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
  end

  private

  def event_params
    params.require(:event).permit(:title, :venue, :date, :time, :address, 
      :latitude, :longitude, :price, :capacity, :age_restriction,
      :ticket_link)
  end
  
  
end


