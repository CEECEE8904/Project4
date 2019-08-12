class CollectsController < ApplicationController
  def index
    @collects = Collect.all
    render json: @collects, include: :sneakers, status: :ok
  end

  def show
    @collect = Collect.find(params[:id])
    render json: @collect
  end

  def create
    @collect = Collect.new(collect_params)
    if @collect.save
      render json: @collect, status: :created
    else
      render json:{ errors: @collect.errors }, status: :unprocessable_entity
    end
  end

  def update
    @collect = Collect.find(params[:id])
    if @collect.update(collect_params)
      render json: { errors: @collect.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @collect = Collect.find(params[:id])
    @collect.destroy
    head 204
  end

  private

  def collect_params
    params.require(:Collect).permit(:name, sneakers:id)
  end
end