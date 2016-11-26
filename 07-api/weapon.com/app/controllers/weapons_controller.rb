class WeaponsController < ApplicationController
  def index
    
  end
  def create
    new_weapon = Weapon.new
    new_weapon.name = params[:name]
    new_weapon.image_url = params[:image_url]
    new_weapon.save
    redirect_to '/weapons'
  end
end
