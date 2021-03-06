/**
 * [description]
 *
 * @method Phaser.Animations.AnimationManager#resumeAll
 * @fires ResumeAllAnimationEvent
 * @since 3.0.0
 * 
 * @return {Phaser.Animations.AnimationManager} The Animation Manager for method chaining.
 */
var ResumeAll = function ()
{
    if (this.paused)
    {
        this.paused = false;

        this.emit('resumeall');
    }

    return this;
};

module.exports = ResumeAll;
