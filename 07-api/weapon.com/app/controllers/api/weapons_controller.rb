module Api
  class WeaponsController < ApplicationController

    def list_all
      start = params[:p].to_i*3-3
      stop = params[:p].to_i*3-1
      weapons = Weapon.all
        weapons = weapons[start..stop]
      render json: weapons
    end

    def countAll
      qty = Weapon.all.count
      render json: qty
    end

    def create
      new_weapon = Weapon.new
      new_weapon.name = params[:name]
      new_weapon.image_url = params[:image_url]
      if new_weapon.save
        render json: new_weapon
      else
        render json: {message: 'Insert failed..'}
      end
    end

    def update
      this_weapon = Weapon.find(params[:weapon_id])
      this_weapon.name = params[:weapon_name]
      this_weapon.image_url = params[:weapon_url]
      this_weapon.save
      if this_weapon.save
        render json: this_weapon
      else
        render json: {message: 'Insert failed..'}
      end
    end

    def delete_weapon
      this_weapon = Weapon.find(params[:weapon_id])
      this_weapon.delete()
    end
  end
end
