
module Api
  class LikesController < ApplicationController

  # post /likes
    def create
      like = Like.new
      like.dish_id = params[:dish_id]
      like.save
      like_count = Dish.find(params[:dish_id]).likes.count
      # redirect_to '/dishes'
      # # render like.to_json
      render json: { like_count: like_count}
    end
  end
end
