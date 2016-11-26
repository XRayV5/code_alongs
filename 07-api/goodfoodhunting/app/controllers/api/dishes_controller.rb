
module Api
  class DishesController < ApplicationController

  # post /likes
    # def create
    #   like = Like.new
    #   like.dish_id = params[:dish_id]
    #   like.save
    #   like_count = Dish.find(params[:dish_id]).likes.count
    #   # redirect_to '/dishes'
    #   # # render like.to_json
    #   render json: { like_count: like_count}
    # end

    def get
      page_records = []
      page = params[:t]
      dishes = Dish.all
      if page != nil
        dishes.each_with_index do |v, i|
          if i >= (page.to_i * 2 - 2) && i < page.to_i * 2 && page != nil
            page_records << v
          end
        end
        render json: {test_k: page_records}
      else
        render json: {test_k: dishes}
      end
    end
  end
end
