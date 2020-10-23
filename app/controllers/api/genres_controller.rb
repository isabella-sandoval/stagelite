class Api::GenresController < ApplicationController
     def index
        @genres = Genre.all
        render 'api/genres/index'
    end

  private

  def genre_params
    params.require(:genre).permit(:title)
  end
end
