
module Api

  class TalksController < ApplicationController

    def list_all
      talks = new Talk()
      render json: talks
    end

  end

end
