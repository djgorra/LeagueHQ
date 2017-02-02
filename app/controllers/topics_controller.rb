class TopicsController < ApplicationController
  def index
    @champion = Champion.find(params[:champion_id])
    @topic = Topic.new
  end

  def new
    @topic = Topic.new
    @champion = Champion.find(params[:champion_id])
  end

  def show
    @champion = Champion.find(params[:champion_id])
<<<<<<< HEAD
    @topic = Topic.find(params[:id])
    @replies = @topic.replies
  end

  def create
    @topic = Topic.new(topic_params)
    @champion = Champion.find(params[:champion_id])
    if @topic.save
      flash[:notice] = "Topic successfully added"
      redirect_to champion_path(@champion.id)
    else
      flash[:notice] = @topic.errors.full_messages.to_sentence
    end
  end

  def destroy
=======

>>>>>>> 7afbd1ac11a0b1d61977219158cfa7664dc640b6
    @topic = Topic.find(params[:id])
    @replies = @topic.replies
    @champion = @topic.champion
    @topic.destroy
    @replies.destroy_all
    flash[:notice] = "Topic Deleted!"
    redirect_to champion_path(@champion)
  end

  private
  def topic_params
    params.require(:topic).permit(:title, :content, :user_id, :champion_id)
  end

  def create
    @topic = Topic.new(topic_params)
    @champion = Champion.find(params[:champion_id])
    if @topic.save
      flash[:notice] = "Topic successfully added"
      redirect_to champion_path(@champion.id)
    else
      flash[:notice] = @topic.errors.full_messages.to_sentence
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @replies = @topic.replies
    @champion = @topic.champion
    @topic.destroy
    @replies.destroy_all
    flash[:notice] = "Topic Deleted!"
    redirect_to champion_path(@champion)
  end

  private
  def topic_params
    params.require(:topic).permit(:title, :content, :user_id, :champion_id)
  end

  def create
    @topic = Topic.new(topic_params)
    @champion = Champion.find(params[:champion_id])
    if @topic.save
      flash[:notice] = "Topic successfully added"
      redirect_to champion_path(@champion.id)
    else
      flash[:notice] = @topic.errors.full_messages.to_sentence
    end
  end

  private
  def topic_params
    params.require(:topic).permit(:title, :content, :user_id, :champion_id)
  end
end
