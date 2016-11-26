
module Api

  class TalksController < ApplicationController

    def list_all
      talks = Talk.all
      render json: talks
    end

  end

end
