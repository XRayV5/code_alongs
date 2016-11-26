class UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def new
    @new_user = User.new
  end

  def create
    @new_user = User.new
    @new_user.email = params[:email]
    @new_user.password_digest = params[:pw]
    if @new_user.save
      # render :index
      redirect_to '/users'
    else
      render :new
    end
  end

  def show
    @the_user = User.find(params[:id])
  end

  def update
    @the_user = User.find(params[:id])
    @the_user.email = params[:user_email]
    if @the_user.save
      redirect_to '/users'
    else
      render :show
    end
  end

  def destroy
    the_user = User.find(params[:id])
    the_user.delete
    redirect_to '/users'
  end
end
