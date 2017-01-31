class TopicsController < ApplicationController
  def index
    @champion = Champion.find(params[:id])
  end

  def show
    @champion = Champion.find(params[:id])
    @topic = Topic.find(params[:id])
    @replies = @topic.replies
  end
end
