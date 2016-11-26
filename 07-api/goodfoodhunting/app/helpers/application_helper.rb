module ApplicationHelper

#Session check
  def logged_in?
    if User.find_by(id: session[:user_id]) == nil
      return false
    else
      return true
    end
  end
#user profile accessor
  def current_user
    User.find(session[:user_id])
  end

end
