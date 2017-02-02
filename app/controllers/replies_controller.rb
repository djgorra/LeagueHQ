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

<<<<<<< HEAD
=======

>>>>>>> 7afbd1ac11a0b1d61977219158cfa7664dc640b6
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

end
