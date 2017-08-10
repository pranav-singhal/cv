class HomeController < ApplicationController


  def index
    puts "here"
    @response= session[:response]
    puts @response
    puts "here"
  end

  def post
    @name=params[:name]
    @email=params[:email]
    @content=params[:content]

    unless @name=="" || @email=="" || @content==""
      PostMailer.index(@name,@email,@content).deliver_now
      @response=true
      session[:response]=@response
      redirect_to "/"
    else
      @response="empty"
      session[:response]=@response

      redirect_to "/"

    end




  end






end
