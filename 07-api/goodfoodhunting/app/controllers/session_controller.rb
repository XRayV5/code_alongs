class SessionController < ApplicationController #singular

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:pw])
      session[:user_id] = @user.id
      redirect_to '/dishes'
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/session/new'
  end

  def new
  end
end
