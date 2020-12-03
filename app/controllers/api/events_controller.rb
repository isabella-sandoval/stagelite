class Api::EventsController < ApplicationController
  def create
    # @event = Event.new(event_params)

    # if @event.save
    #   render 'api/events/show'
    # else
    #   render json: {errors: "This event does not exist"}, status: 422
    # end

    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.date.class == Date && @event.time.class == Time
      @event.date = Date.parse(@event.date.to_s)
      @event.time = Time.parse(@event.time.to_s)
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

  def search 
        params.require(:q).permit(:owner_id, :name, :address, :cuisine)

        sql_string = ""
        sql_order = ""
        if(params[:q][:name].present?)
            sql_string += " OR "if(sql_string.length > 1)
            p sql_string
            sql_string += " lower(name) LIKE '%#{params[:q][:name]}%'"
        end
        if(params[:q][:address].present?)
            sql_string += " OR "if(sql_string.length > 1)
            p sql_string

            sql_string += " lower(address) LIKE '%#{params[:q][:address]}%'"
        end
        if (params[:q][:cuisine].present?)
            sql_string += " OR "if(sql_string.length > 1)
            p sql_string

            sql_string += " lower(cuisine) LIKE '%#{params[:q][:cuisine]}%'"
        end
        if (params[:q][:owner_id].present?)
            sql_string += " OR "if(sql_string.length > 1)
            p sql_string

            sql_string += " owner_id = #{params[:q][:owner_id]}"

        end

        sql_order = " ORDER BY #{sql_order} DESC" if(sql_order.length > 0)
        sql_string = "SELECT * FROM restaurants WHERE #{sql_string}#{sql_order}" #
            
        @restaurants = Restaurant.find_by_sql(sql_string)
        render '/api/restaurants/index'

    end

  private

  def event_params
    params.require(:event).permit(:title, :venue, :date, :time, :address,
     :price, :capacity, :age_restriction)
  end
  
  
end


