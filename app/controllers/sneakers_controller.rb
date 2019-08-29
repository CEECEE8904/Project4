class SneakersController < ApplicationController
  def index
    @sneakers = Sneaker.all
    render json: @sneakers, include: :collects, status: :ok
  end

  def show
    @sneaker = Sneaker.find(params[:id])
    render json: @sneaker
  end

  def create
    @sneaker = Sneaker.new(sneakr_params)
    if @sneaker.save
      render json: @sneaker, status: :created
    else
      render json:{ errors: @sneaker.errors }, status: :unprocessable_entity
    end
  end

  def update
    @sneaker = Sneaker.find(params[:id])
    if @sneakr.update(sneaker_params)
      render json: { errors: @sneaker.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @sneaker = Sneaker.find(params[:id])
    @sneaker.destroy
    head 204
  end

  private

  def sneaker_params
    params.require(:Sneaker).permit(:name, collects:id)
  end
end