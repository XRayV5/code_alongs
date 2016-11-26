class LeadsController < ApplicationController
  def create
    @new_lead = Lead.new()
    @new_lead.email = params[:email]
    # @new_lead.save
    # redirect_to '/thanks'

    if @new_lead.save
        redirect_to '/leads'
    else
        render '/leads/new' #:new
    end

  end

  def show
    @the_lead = Lead.find(params[:id])
  end

  def edit
  end

  def destroy
    the_lead = Lead.find(params[:id])
    the_lead.destroy
    redirect_to '/leads'
  end

  def update
    @the_lead = Lead.find(params[:id])
    @the_lead.email = params[:email_new]
    if @the_lead.save
      redirect_to '/leads'
    else
      render :show
    end
  end

  def new
    @new_lead = Lead.new()
  end

  def index
    @leads  = Lead.all
    render :index
  end
end
