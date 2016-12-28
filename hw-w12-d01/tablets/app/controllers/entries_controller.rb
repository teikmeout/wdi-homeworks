class EntriesController < ApplicationController
  def index
    # entry all to fetch all entries
    @entries = Entry.all
    render json: @entries
  end

  def create
    # new instance of Entry, using permited_params
    new_entry = Entry.new(permitted_params)
    # save the data and return it if it worked
    if new_entry.save
      render json: new_entry
    else render status: 422
    end
  end

  def update
    #find the entry to update
    find_entry = Entry.find(params[:id])
    # change the data and check if it worked
    if find_entry.update(permitted_params)
      render status: 204
    else render status: 422
    end
  end

  def destroy
    # find the element to destroy
    find_entry = Entry.find(params[:id])
    # destroy that shit
    find_entry.destroy!
    render status: 204
  end

  private
  def permitted_params
    # had to change some names, entry was not working for me
    params.require(:post).permit(:id, :name, :body)
  end
end
