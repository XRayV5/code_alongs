class DishesController < ApplicationController

include ApplicationHelper


  def index
    @dishes = Dish.all
  end

  def new
    @new_dish = Dish.new
  end

  def show
    if logged_in?
      @this_dish = Dish.find(params['id'])
      render :show
    else
      redirect_to "/session/new"
    end
  end

  def update
    @this_dish = Dish.find(params['id'])
    @this_dish.name = params[:e_name]
    @this_dish.image_url = params[:e_url]
    @this_dish.save
    render :show
  end

  def destroy
    this_dish = Dish.find(params[:id])
    this_dish.delete()
    redirect_to "/dishes"
  end

  def create
    @new_dish = Dish.new()
    @new_dish.name = params[:d_name]
    @new_dish.image_url = params[:d_url]
    if @new_dish.save
      redirect_to '/dishes'
    else
      render :new
    end
  end
end
