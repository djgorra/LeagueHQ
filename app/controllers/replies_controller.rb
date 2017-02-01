class RepliesController < ApplicationController
  def new
    @reply = Reply.new
    @topic = Topic.find(params[:topic_id])
  end

  def create
    @reply = Reply.new(reply_params)
    @topic = Topic.find(params[:topic_id])
    @champion = Champion.find(params[:champion_id])
    if @reply.save
      flash[:notice] = "Topic successfully added"
      redirect_to champion_topic_path(@champion.id, @topic.id)
    else
      flash[:notice] = @reply.errors.full_messages.to_sentence
    end
  end

  private

  def reply_params
    params.require(:reply).permit(:content, :user_id, :topic_id)
  end

end
