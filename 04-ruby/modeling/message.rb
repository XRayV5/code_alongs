class Message

  def initialize(body, author)
    @body = body
    @author = author
  end

  def to_s
    @body
  end
end
