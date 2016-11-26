class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  #To fix CORS for AJAX request
  skip_before_filter :verify_authenticity_token


  # #Session check
  #   def logged_in?
  #     if User.find_by(id: session[:user_id]) == nil
  #       return false
  #     else
  #       return true
  #     end
  #   end
  # #user profile accessor
  #   def current_user
  #     User.find(session[:user_id])
  #   end

end
