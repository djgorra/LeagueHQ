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

  def update
    @reply = Reply.find(params[:id])
    @topic = Topic.find(params[:topic_id])
    @champion = Champion.find(params[:champion_id])
    @reply.update(reply_edit_params)
    redirect_to champion_topic_path(@topic.champion.id, @topic.id)
  end

  def destroy
    @reply = Reply.find(params[:id])
    @topic = params[:topic_id]
    @champion = params[:champion_id]
    @reply.destroy
    redirect_to champion_topic_path(@champion, @topic)
  end

  private

  def reply_params
    params.require(:reply).permit(:content, :user_id, :topic_id)
  end

  def reply_edit_params
    params.require(:reply).permit(:content)
  end

end
