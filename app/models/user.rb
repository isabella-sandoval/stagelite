class User < ApplicationRecord
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence:true


    has_many :events,
      primary_key: :id,
      foreign_key: :organizer_id,
      class_name: :Event

  attr_reader :password
  after_initialize :ensure_session_token


  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user
      return @user if @user.is_password?(password)
    else
      return false
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.new_session_token
  end

  def reset_session_token!
    self.session_token = User.new_session_token
    self.save
    self.session_token
  end

  def self.new_session_token
    SecureRandom.urlsafe_base64
  end


end
