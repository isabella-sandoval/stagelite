class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render :show
        else
            render json: ['Incorrect email or password'], status: 422
        end
    end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json:['No user signed in'], status: 404
    end
  end

end
