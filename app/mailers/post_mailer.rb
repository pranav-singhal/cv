class PostMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.post_mailer.index.subject
  #
  def index(name,email,content)
    @name=name
    @email=email
    @content=content
    mail to: "prnv_singhal@yahoo.co.in", subject: "response to your cv"
  end
end
