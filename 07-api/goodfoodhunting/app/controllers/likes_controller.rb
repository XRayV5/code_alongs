class LikesController < ApplicationController

# post /likes
  def create
    like = Like.new
    like.dish_id = params[:dish_id]
    like.save
    redirect_to '/dishes'
    # render like.to_json 
  end
end
