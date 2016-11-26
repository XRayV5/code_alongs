class CommentsController < ApplicationController

  def create
    new_comment = Comment.new
    new_comment.comment = params[:cmt]
    new_comment.dish_id = params[:dish_id]
    new_comment.save
    redirect_to '/dishes'
  end

  def destroy
    this_comment = Comment.find(params[:id])
    this_comment.delete;
    @this_dish = Dish.find(params[:dish_id])
    # render "/dishes/#{@this_dish.id}"
    redirect_to '/dishes'
  end

end
