class Post < ApplicationRecord
    validates :title, :content, presence: true

    def self.full_search(word)
        self.all.select {|post| ( post.title.include?(word) || post.content.include?(word) ) }
    end
end
