class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json:['Username is taken'], status:401
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name)
  end

end
