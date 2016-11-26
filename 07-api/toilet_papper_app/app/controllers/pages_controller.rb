class PagesController < ApplicationController
  def home
    @new_lead = Lead.new
  end

  def about
  end

  def donate
  end

  def thanks
  end

  def new_lead
    @new_lead = Lead.new
    @new_lead.email = params[:email]
    if @new_lead.save
      redirect_to '/thanks'
    else
      render :home #'/pages/home'
    end
  end
end
